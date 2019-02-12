//afectar una colección, todo está en el archivp de ejemplo que mostr´
const eventos = require("./eventosSchema");
exports.geteventoss = (req, res) => {
  eventos.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.geteventos = (req, res) => {
  let id = req.params.id;
  eventos.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.neweventos = (req, res) => {
  const neweventos = new eventos(req.body);
  neweventos.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(neweventos);
  });
};

exports.updateeventos = (req, res) => {
  let nom = req.body.nombre;
  eventos.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nom },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user);
    }
  );
};

exports.deleteeventos = (req, res) => {
  eventos.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user._id);
  });
};
