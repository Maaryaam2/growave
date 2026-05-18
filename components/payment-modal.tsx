"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Smartphone, CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type PaymentMethod = "fib" | "card"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  courseTitle: string
}

const slate = "#1e293b"
const emeraldBtn =
  "flex w-full items-center justify-center gap-2 rounded-[2.5rem] bg-emerald-500 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-emerald-600 hover:shadow-lg active:scale-[0.99]"

export function PaymentModal({ isOpen, onClose, courseTitle }: PaymentModalProps) {
  const phoneNumber = "9647503981341"
  const message = encodeURIComponent(`Hi Maryam, I have paid for the ${courseTitle} course. Here is my receipt.`)
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`

  const [method, setMethod] = useState<PaymentMethod>("fib")
  const [cardholder, setCardholder] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvv, setCvv] = useState("")

  const resetForm = () => {
    setMethod("fib")
    setCardholder("")
    setCardNumber("")
    setExpiry("")
    setCvv("")
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const optionBase =
    "flex cursor-pointer flex-col gap-4 rounded-[2.5rem] border-2 p-8 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
  const optionInactive = "border-slate-200/80 bg-white shadow-sm hover:border-emerald-500/40"
  const optionActive = "border-emerald-500 bg-slate-50 shadow-lg ring-2 ring-emerald-500/20"

  const inputClass =
    "h-12 rounded-2xl border-slate-200 bg-white px-4 text-[#1e293b] placeholder:text-slate-400 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/30"

  const cardFormComplete =
    cardholder.trim().length > 1 &&
    cardNumber.replace(/\s/g, "").length >= 12 &&
    expiry.trim().length >= 4 &&
    cvv.length >= 3

  const handleCardPay = () => {
    if (!cardFormComplete) return
    const cardMsg = encodeURIComponent(
      `Hi, I would like to pay by debit/credit card for the course: "${courseTitle}". Please send me secure payment instructions.`,
    )
    window.open(`https://wa.me/${phoneNumber}?text=${cardMsg}`, "_blank", "noopener,noreferrer")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[998] bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            className="fixed inset-x-4 top-[4%] z-[999] flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl md:inset-auto md:left-1/2 md:top-1/2 md:max-h-[90vh] md:-translate-x-1/2 md:-translate-y-1/2"
          >
            <div className="relative shrink-0 border-b border-slate-100 p-8 pb-6">
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-[#1e293b] transition-colors hover:bg-slate-100"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <h2 className="text-center text-xl font-semibold tracking-tight text-[#1e293b]">Complete payment</h2>
              <p className="mt-2 text-center text-sm font-medium text-emerald-600">{courseTitle}</p>
            </div>

            <div className="min-h-0 flex-1 space-y-6 overflow-y-auto p-6 md:p-8">
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#1e293b]/70">
                Choose a method
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setMethod("fib")}
                  className={cn(optionBase, optionInactive, method === "fib" && optionActive)}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner"
                    style={{ backgroundColor: slate }}
                  >
                    <Smartphone className="h-7 w-7 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[#1e293b]">FIB QR</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">Pay with First Iraq Bank app</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setMethod("card")}
                  className={cn(optionBase, optionInactive, method === "card" && optionActive)}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner"
                    style={{ backgroundColor: slate }}
                  >
                    <CreditCard className="h-7 w-7 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[#1e293b]">Debit / Credit Card</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      Visa, MasterCard, or Local Bank Cards
                    </p>
                  </div>
                </button>
              </div>

              {method === "fib" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-5 rounded-[2.5rem] border border-slate-100 bg-slate-50/80 p-8 shadow-inner"
                >
                  <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Account</p>
                    <p className="font-mono text-lg font-semibold text-[#1e293b]">+964 750 729 6446</p>
                    <p className="mt-1 text-sm text-slate-600">Learning and growth community</p>
                  </div>

                  <div className="flex gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <Smartphone className="h-6 w-6 shrink-0 text-emerald-500" />
                    <p className="text-xs leading-relaxed text-[#1e293b]">
                      1. Scan the number using your FIB app.
                      <br />
                      2. Complete the payment.
                      <br />
                      3. Screenshot the receipt and send it below.
                    </p>
                  </div>
                </motion.div>
              )}

              {method === "card" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-5 rounded-[2.5rem] border border-slate-100 bg-slate-50/80 p-8 shadow-inner"
                >
                  <div className="space-y-2">
                    <Label htmlFor="pm-cardholder" className="text-[#1e293b]">
                      Cardholder name
                    </Label>
                    <Input
                      id="pm-cardholder"
                      autoComplete="cc-name"
                      placeholder="Name as shown on card"
                      value={cardholder}
                      onChange={(e) => setCardholder(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pm-number" className="text-[#1e293b]">
                      Card number
                    </Label>
                    <Input
                      id="pm-number"
                      inputMode="numeric"
                      autoComplete="cc-number"
                      placeholder="0000 0000 0000 0000"
                      maxLength={19}
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value.replace(/[^\d\s]/g, ""))}
                      className={inputClass}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pm-expiry" className="text-[#1e293b]">
                        Expiry (MM/YY)
                      </Label>
                      <Input
                        id="pm-expiry"
                        autoComplete="cc-exp"
                        placeholder="MM/YY"
                        maxLength={5}
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pm-cvv" className="text-[#1e293b]">
                        CVV
                      </Label>
                      <Input
                        id="pm-cvv"
                        type="password"
                        autoComplete="cc-csc"
                        placeholder="•••"
                        maxLength={4}
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <p className="text-center text-[11px] leading-relaxed text-slate-500">
                    Card details are not stored on this site. You will confirm payment securely with our team.
                  </p>
                </motion.div>
              )}

              <div className="h-2 shrink-0" />
            </div>

            <div className="shrink-0 border-t border-slate-100 bg-white p-6 md:p-8">
              {method === "fib" ? (
                <a href={whatsappLink} target="_blank" rel="noreferrer" className={emeraldBtn}>
                  <MessageCircle className="h-5 w-5" />
                  Confirm &amp; send receipt
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleCardPay}
                  disabled={!cardFormComplete}
                  className={cn(
                    emeraldBtn,
                    !cardFormComplete && "pointer-events-none opacity-50 hover:bg-emerald-500 hover:shadow-md",
                  )}
                >
                  <CreditCard className="h-5 w-5" />
                  Pay now
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
