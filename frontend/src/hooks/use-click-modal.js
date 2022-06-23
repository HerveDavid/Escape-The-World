import { useState } from "react";

export function useClickModal() {

    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return [isOpen, handleOpen, handleClose];

}