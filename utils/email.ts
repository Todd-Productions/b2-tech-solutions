import { createTransport } from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport"
import handlebars from "handlebars"
import fs from "fs"
import path from "path"

export interface IEmailParams {
  subject: string
  to: string | string[]
  template: string
  context?: any
}

/**
 * Send Email
 */
const email = async (params: IEmailParams): Promise<any> => {
  const { subject, to, template, context } = params

  /**
   * Configure NodeMail For Sending
   */
  const poolOptions = {
    pool: true,
    maxConnections: 1,
    maxMessages: 5,
  }

  const smtpOptions = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT, 2) : 465,
    secure: process.env.MAIL_SECURE === "true",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  }

  const options: SMTPTransport.Options = {
    ...poolOptions,
    ...smtpOptions,
  }

  const transporter = createTransport(options)

  const templatePath = path.join(process.cwd(), `templates/${template}.hbs`)
  const emailTemplate = fs.readFileSync(templatePath, "utf8")
  const templateBuild = handlebars.compile(emailTemplate)
  const htmlToSend = templateBuild({
    ...context,
  })

  /**
   * Build Emails For Sending
   */
  await transporter.sendMail({
    from: `B2 Tech Solutions <${process.env.MAIL_FROM}>`,
    to,
    subject,
    html: htmlToSend,
  })
}

export default email
