import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email không được để trống'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Email có độ dài tối đa 160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Email có độ dài tối thiểu 5 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password không được để trống'
    },
    maxLength: {
      value: 160,
      message: 'Password có độ dài tối đa 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Password có độ dài tối thiểu 6 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Confirm Password không được để trống'
    },
    maxLength: {
      value: 160,
      message: 'Password có độ dài tối đa 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Password có độ dài tối thiểu 6 ký tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Nhập lại mật khẩu không khớp'
        : undefined
  }
})
