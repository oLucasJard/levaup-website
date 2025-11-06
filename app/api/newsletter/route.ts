import { NextResponse } from 'next/server'
import mailchimp from '@mailchimp/mailchimp_marketing'

// Configurar o Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // Ex: us21
})

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validar e-mail
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'E-mail inválido' },
        { status: 400 }
      )
    }

    // Adicionar à lista do Mailchimp
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID as string,
      {
        email_address: email,
        status: 'subscribed',
        tags: ['Website', 'Newsletter'],
        merge_fields: {
          SOURCE: 'Website LevaUp',
        },
      }
    )

    return NextResponse.json(
      {
        success: true,
        message: 'E-mail cadastrado com sucesso! 🎉',
        data: {
          id: response.id,
          email: response.email_address,
        },
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Erro ao cadastrar no Mailchimp:', error)

    // E-mail já existe na lista
    if (error.status === 400 && error.response?.body?.title === 'Member Exists') {
      return NextResponse.json(
        { error: 'Este e-mail já está cadastrado! ✅' },
        { status: 400 }
      )
    }

    // Outros erros
    return NextResponse.json(
      { error: 'Erro ao cadastrar. Tente novamente mais tarde.' },
      { status: 500 }
    )
  }
}

