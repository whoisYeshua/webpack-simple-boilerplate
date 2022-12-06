import { fileURLToPath } from 'node:url'
import path from 'node:path'

const projectRootFolder = fileURLToPath(new URL('../..', import.meta.url))

export const paths = {
  src: path.resolve(projectRootFolder, 'src'),
  public: path.resolve(projectRootFolder, 'public'),
  dist: path.resolve(projectRootFolder, 'dist'),
}
