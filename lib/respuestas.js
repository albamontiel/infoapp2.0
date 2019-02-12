//afectar una colección, todo está en el archivp de ejemplo que mostr´
const respuestas = require("./respuestasSchema");
exports.getrespuestass = (req, res) => {
  respuestas.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getrespuestas = (req, res) => {
  let id = req.params.id;
  respuestas.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newrespuestas = (req, res) => {
  const newrespuestas = new respuestas(req.body);
  newrespuestas.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newrespuestas);
  });
};

exports.updaterespuestas = (req, res) => {
  let nom = req.body.nombre;
  respuestas.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nom },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user);
    }
  );
};

exports.deleterespuestas = (req, res) => {
  respuestas.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user._id);
  });
};
