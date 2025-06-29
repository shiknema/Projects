exports.helloWorld = (req, res) => {
    let message1 = req.query.message || req.body.message || 'First Deploy!';
    res.status(200).send(message1);
  };
