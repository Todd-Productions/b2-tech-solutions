import React from "react"

import { useForm } from "react-hook-form"
import { Button } from "../../atoms"

export interface IContactState {
  name: string
  email: string
  phone: string
  message: string
}

export interface ContactFormProps {
  /* eslint-disable-next-line no-unused-vars */
  handleSubmission: (formData: IContactState) => void
}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const { handleSubmission } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactState>()

  const onSubmit = (data: any) => {
    handleSubmission(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white pb-24">
      <div className="bg-white pb-4">
        <label
          className="uppercase font-bold text-green-600 py-4 radius-2 w-full block"
          htmlFor="name"
        >
          name *
        </label>
        <input
          className="rounded border border-solid border-gray-500 p-4 w-full"
          type="text"
          id="name"
          placeholder="Name"
          {...register("name")}
        />
      </div>

      <div className="bg-white pb-4">
        <label
          className="uppercase font-bold text-green-600 py-4 radius-2 w-full block"
          htmlFor="email"
        >
          email *
        </label>
        <input
          className="rounded border border-solid border-gray-500 p-4 w-full"
          type="text"
          id="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
      </div>

      <div className="bg-white pb-4">
        <label
          className="uppercase font-bold text-green-600 py-4 radius-2 w-full block"
          htmlFor="phone"
        >
          phone *
        </label>
        <input
          className="rounded border border-solid border-gray-500 p-4 w-full"
          type="text"
          id="phone"
          placeholder="Phone"
          {...register("phone", { required: true })}
        />
      </div>

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
