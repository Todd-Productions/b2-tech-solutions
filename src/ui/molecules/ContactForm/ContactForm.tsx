import React from "react"

import { useForm, SubmitHandler } from "react-hook-form"
import { Input, Button } from "../../atoms"

type Inputs = {
  name: string
  email: string
  phone: number
  message: string
}

export interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white pb-24">
      <Input
        label="name"
        placeholder="name"
        {...register("name", { required: true })}
      />
      <Input
        label="email"
        placeholder="email"
        type="email"
        {...register("email", { required: true })}
      />
      <Input
        label="phone"
        placeholder="phone"
        type="tel"
        {...register("phone", { required: true })}
      />

      <div className="bg-white pb-4">
        <label
          className="uppercase font-bold text-green-600 py-4 radius-2 w-full block"
          htmlFor="message"
        >
          what can we do for you? *
          <textarea
            id="message"
            className="font-normal rounded border border-solid border-gray-500 p-4 w-full md:h-60"
            placeholder="What Can We Do For You?"
            {...register("message", { required: true })}
          />
        </label>
      </div>

      {(errors.name || errors.email || errors.message) && (
        <span className="px-20 text-red-500">All fields are required*</span>
      )}

      <div className="text-center w-fit mx-auto">
        <Button color="green" type="submit" fullWidth>
          contact us
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
