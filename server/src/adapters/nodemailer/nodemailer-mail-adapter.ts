import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "257a2e8fc71c3f",
      pass: "81d36deaf702e5"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
           await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Vinicius Peres <peresvini2@gmail.com>',
            subject,
            html: body,

        });
    };
}