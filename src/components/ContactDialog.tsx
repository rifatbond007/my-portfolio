import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            Send me a message and I'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! (This is a demo)");
            onOpenChange(false);
          }}
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input placeholder="Your name" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input type="email" placeholder="your.email@example.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <Input placeholder="What's this about?" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea placeholder="Your message..." rows={5} required />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="flex-1 border border-black rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
