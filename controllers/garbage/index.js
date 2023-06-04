const Garbage = require('../../models/garbage');

const createGarbages = async (req, res) => {
  try {
    const newGarbages = req.body;
    const result = await Garbage.create(newGarbages);
    res.status(200).json({ message: "Success add new garbage", data: result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getGarbages = async (req, res) => {
  try {
    const garbages = await Garbage.findAll();

    if (garbages.length == 0) return res.status(404).json({ message: "Data garbage not found" })

    res.status(200).json({ message: "Success retrieve garbage data", data: garbages });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const updateGarbages = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGarbages = req.body;

    const [rowsUpdated] = await Garbage.update(updatedGarbages, {
      where: { id },
    });

    if (rowsUpdated === 0) {
      return res.status(404).json({ message: 'Garbage not found' });
    }

    res.status(200).json({ message: 'Garbage updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteGarbages = async (req, res) => {
  try {
    const { id } = req.params;

    const rowsDeleted = await Garbage.destroy({
      where: { id },
    });

    if (rowsDeleted === 0) {
      return res.status(404).json({ message: 'Garbage not found' });
    }

    res.status(200).json({ message: 'Garbage deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  createGarbages,
  getGarbages,
  updateGarbages,
  deleteGarbages,
};
