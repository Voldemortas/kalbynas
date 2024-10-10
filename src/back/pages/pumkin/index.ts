export default function index(request: Request, params: string[]) {
  return {src: params[0] ?? ':('}
}
