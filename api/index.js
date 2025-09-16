export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-cache');
  throw new Error('서버에서 에러가 발생했습니다!');
}
