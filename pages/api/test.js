export default function handler(req, res) {
  const date = new Date();
  const korDate = date.toLocaleString("ko-KR");
  return res.status(200).json(korDate);
}
