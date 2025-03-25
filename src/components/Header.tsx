"use client"
import React from 'react'
import { Flex, Text, Image, Button } from '@mantine/core'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()

  const GoHome = () => {
    router.push('/')
  }

  const SignUp = () => {
    router.push('/signup')
  }
  const SignIn = () => {
    router.push('/signin')
  }
  return (
    <Flex align="center" justify="space-between" direction="row" w="100%" px={60} my={28}>
      <Flex align="center" justify="center" direction="row" gap={16}>
        <Image onClick={GoHome} styles={{ root: { cursor: 'pointer' } }} src="/Logo.svg" alt='logo' />
        <Text size='lg' c="brand.9" styles={{ root: { cursor: 'pointer' } }} fw={600} onClick={GoHome}>Everyday Stack</Text>
      </Flex>
      <Flex gap={36} align="center" justify="center" direction="row">
        <Button onClick={SignUp} variant='transparent' c="brand.9" size='lg' fw={500}>Sign Up</Button>
        <Button size='lg' c="brand.9" variant='transparent' w={600} onClick={SignIn}>Sign In</Button>
      </Flex>
    </Flex>
  )
}

export default Header