"use client"
import { Copy } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Separator } from "./ui/separator";
import { toast } from "sonner";

export default function Paymentinfo({ condition, vanumber, setcondition }) {
    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(vanumber);
            toast("nomer telah di salin :)", { position: "top-center" })
        } catch (err) {
            console.error("Failed to copy:", err);
            toast .error("nomer gagal di salin :(", { position: "top-center" })
        }
    }
    return <Dialog open={condition} onOpenChange={setcondition} >
        <DialogContent>
            <DialogHeader>
                <DialogTitle> ini adalah nomer va anda  </DialogTitle>
                <DialogDescription> Pembayaran paling lambat sampai jam 24:00 wib  </DialogDescription>
            </DialogHeader>
            <Separator />
            <div className="flex items-center gap-2" >
                <div className="p-2 text-2xl w-max self-center justify-self-center rounded-xl font-medium text-center bg-primary/30 text-primary" >
                    {vanumber}
                </div>
                <Button onClick={copyToClipboard} size="icon" variant="outline" > <Copy /> </Button>
            </div>
        </DialogContent>
    </Dialog>
}