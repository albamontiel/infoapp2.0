//afectar una colección, todo está en el archivp de ejemplo que mostr´
const conceptos = require("./conceptosSchema");
exports.getconceptoss = (req, res) => {
  conceptos.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getconceptos = (req, res) => {
  let id = req.params.id;
  conceptos.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newconceptos = (req, res) => {
  const newconceptos = new conceptos(req.body);
  newconceptos.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newconceptos);
  });
};

exports.updateconceptos = (req, res) => {
  let nom = req.body.nombre;
  conceptos.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nom },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user);
    }
  );
};

exports.deleteconceptos = (req, res) => {
  conceptos.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user._id);
  });
};
