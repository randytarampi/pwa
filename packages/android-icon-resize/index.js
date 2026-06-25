import icons from '@randy.tarampi/android-icons'
import { errorMessage, iconsGenerator as generator } from '@randy.tarampi/generic-icon-splash-generate'

export default function resize (input, output = process.cwd()) {
  if (!input) {
    errorMessage(new Error('`input` parameter is required.'))
  }
  return generator(icons(), input, output)
}
