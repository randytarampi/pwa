import splash from '@randy.tarampi/android-splash'
import { errorMessage, splashScreensGenerator as generator } from '@randy.tarampi/generic-icon-splash-generate'

export default function generate (input, output = process.cwd()) {
  if (!input) {
    errorMessage(new Error('`input` parameter is required.'))
  }
  return generator(splash(), input, output)
}
