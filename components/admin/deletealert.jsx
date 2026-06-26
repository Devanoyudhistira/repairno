"use client"

import { deleteitem } from "@/action/shopcrud";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Trash2Icon } from "lucide-react";
import { useActionState } from "react";

export default function Deletealert({ opencondition, setopencondition, deskripsi, title, id,deleteaction }) {
    return <AlertDialog open={opencondition} onOpenChange={setopencondition} >
        <AlertDialogContent size="sm">
            <AlertDialogHeader>
                <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                    <Trash2Icon />
                </AlertDialogMedia>
                <AlertDialogTitle>{title}</AlertDialogTitle>
                <AlertDialogDescription>
                    {deskripsi}
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive">
                    <form action={deleteaction}>
                       <button type="submit" > Delete </button>
                    </form>
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog >
}