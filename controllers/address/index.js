const Address = require('../../models/address');

const createAddress = async (req, res) => {
  try {
    const newAddress = req.body;
    const result = await Address.create(newAddress);
    res.status(200).json({ message: 'Berhasil menambahkan alamat', address: result });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAddress = async (req, res) => {
  try {
    const address = await Address.findAll();
    res.status(200).json(address);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAddress = req.body;

    const [rowsUpdated] = await Address.update(updatedAddress, {
      where: { id },
    });

    if (rowsUpdated === 0) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.status(200).json({ message: 'Address updated successfully' });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;

    const rowsDeleted = await Address.destroy({
      where: { id },
    });

    if (rowsDeleted === 0) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createAddress,
  getAddress,
  updateAddress,
  deleteAddress,
};
