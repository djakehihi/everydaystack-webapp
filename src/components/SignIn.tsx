import React from 'react'
import { useForm } from '@mantine/form'
import { TextInput, Flex, Text, PasswordInput, Button } from '@mantine/core'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

const SignIn = () => {
  const Router = useRouter()

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => {
        if (!value.trim()) return "Email is required";
        if (!value.includes("@")) return "Invalid email";
      },
      password: (value) => {
        if (!value.trim()) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
      }
    },
  })

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validation = form.validate()
    if (validation.hasErrors) {
      console.log(validation)
      return
    }
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.getValues().email,
        password: form.getValues().password,
      })
      console.log(data)
      Router.push('/')
      if (error) throw error
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <Flex align="center" justify="center" direction="column" p="xl" gap={64}>
      <Text size="xl" fw={700}>
        Sign In
      </Text>
      <form onSubmit={handleSignIn}>
        <TextInput
          label="Email"
          placeholder="Your email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          {...form.getInputProps("password")}
        />
        <Button type="submit" color="blue">
          Sign In
        </Button>
      </form>
    </Flex>
  )
}

export default SignIn