import { useState } from 'react'

export const useModal = (): [boolean, { open: () => void, close: () => void }] => {
  const [isOpened, setIsOpened] = useState(false)

  const close = () => setIsOpened(false)
  const open = () => setIsOpened(true)

  return [isOpened, { open, close }]
}
