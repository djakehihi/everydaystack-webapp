import React from 'react'
import { useForm } from '@mantine/form'
import { TextInput, Flex, Text, PasswordInput, Checkbox, Button } from '@mantine/core'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const Router = useRouter()

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      email: "",
      password: "",
      rePassword: "",
      termsOfService: false,
    },

    validate: {
      username: (value) => (value.trim() ? null : "Username is required"),
      email: (value) => {
        if (!value.trim()) return "Email is required";
        if (!value.includes("@")) return "Invalid email";
      },
      password: (value) => {
        if (!value.trim()) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
      },
      rePassword: (value, values) => {
        if (!value.trim()) return "Confirm password is required";
        if (value !== values.password) return "Passwords do not match";
      },
      termsOfService: (value) => (value ? null : "You must agree to the terms of service"),
    }
  })

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validation = form.validate()
    if (validation.hasErrors) {
      console.log(validation)
      return
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: form.getValues().email,
        password: form.getValues().password,
      })
      console.log(data)
      Router.push('/')
      if (error) throw error
    } catch (error) {
      console.log(error)
    }
  }
  return (
  <Flex align="center" justify="center" direction="column" p="xl" gap={64}>
      <Text size='xl' fw={700}>Start sharing your stack</Text>
      <form onSubmit={handleSignUp}>
        <Flex direction="column" gap="md" w={400}>
          <TextInput
            withAsterisk
            label="Username"
            placeholder="Your username"
            {...form.getInputProps('username')}
          />

          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />

          <PasswordInput
            withAsterisk
            label="Password"
            placeholder="Your password"
            {...form.getInputProps('password')}
          />

          <PasswordInput
            withAsterisk
            label="Confirm Password"
            placeholder="Confirm your password"
            key={form.key('rePassword')}
            {...form.getInputProps('rePassword')}
          />

          <Checkbox
            label="I agree to the terms of service"
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />

          <Button type="submit" fullWidth mt="md">
            Sign Up
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}

export default SignUp