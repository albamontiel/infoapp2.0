//afectar una colección, todo está en el archivp de ejemplo que mostr´
const preguntas = require("./preguntasSchema");
exports.getpreguntass = (req, res) => {
  preguntas.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getpreguntas = (req, res) => {
  let id = req.params.id;
  preguntas.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newpreguntas = (req, res) => {
  const newpreguntas = new preguntas(req.body);
  newpreguntas.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newpreguntas);
  });
};

exports.updatepreguntas = (req, res) => {
  let nom = req.body.nombre;
  preguntas.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nom },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user);
    }
  );
};

exports.deletepreguntas = (req, res) => {
  preguntas.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user._id);
  });
};
