import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Separator } from "./ui/separator";

export default function Paymentinfo(){
    return <Dialog  >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle> ini adalah nomer va anda  </DialogTitle>
                    <DialogDescription> Pembayaran paling lambat sampai jam 24:00 wib  </DialogDescription>
                </DialogHeader>
                <Separator/>
                <div className="p-2 text-2xl w-max self-center justify-self-center rounded-xl font-medium text-center bg-primary/30 text-primary" >
                    00827316352326335
                </div>
             </DialogContent>
    </Dialog>
}