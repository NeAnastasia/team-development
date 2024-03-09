import { userData } from "../../_Constants/types"

export const AuthService = {
    async registration(userData) {},
    async login() {},
    async logout() {}
}

interface MessageReceiver {
  onMessage: (message: Message) => void
} 