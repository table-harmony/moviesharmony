import { DEFAULT_SERVER_ERROR, createSafeActionClient } from "next-safe-action";
import { currentUser } from "@clerk/nextjs/server";

export const unauthenticatedAction = createSafeActionClient({
  handleReturnedServerError(e) {
    if (e instanceof ActionError) return e.message;
    return DEFAULT_SERVER_ERROR;
  },
});

export const authenticatedAction = createSafeActionClient({
  async middleware() {
    const user = await currentUser();

    if (!user) throw new ActionError("Session is invalid!");

    return { user };
  },
  handleReturnedServerError(e) {
    if (e instanceof ActionError) return e.message;
    return DEFAULT_SERVER_ERROR;
  },
});

export class ActionError extends Error {}
