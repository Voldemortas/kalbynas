export default function index(request: Request, params: string[]) {
  return {msg: params[0] ?? ':('}
}
