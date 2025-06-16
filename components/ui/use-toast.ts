import { toast as sonnerToast } from "sonner"

export function toast({ title, description }: { title: string; description?: string }) {
  return sonnerToast(title, {
    description,
    position: "bottom-right",
  })
}
