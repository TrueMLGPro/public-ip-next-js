import requestIp from 'request-ip';

export default function handler(req, res) {
  const ipAddress = requestIp.getClientIp(req);
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(ipAddress);
}