'use client'

import { ReactNode } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogDescription,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogTrigger,
} from './ui/alert-dialog'

interface ConfirmModalProps {
  children: ReactNode
  onConfirm: () => void
  disabled?: boolean
  header: string
  description?: string
}

export const ConfirmModal = ({
  children,
  onConfirm,
  disabled,
  description,
  header,
}: ConfirmModalProps) => {
  const onHandleConfirm = () => {
    onConfirm()
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{header}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={disabled} onClick={onHandleConfirm}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
