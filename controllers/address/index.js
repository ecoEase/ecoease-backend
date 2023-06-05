const { where } = require('sequelize');
const Address = require('../../models/address');

const createAddress = async (req, res) => {
  try {
    const newAddress = req.body;
    const result = await Address.create(newAddress);
    res.status(200).json({ message: 'Success adding new address', address: result });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAddress = async (req, res) => {
  try {
    const { userId } = req.query

    const address = userId ? await Address.findAll({
      where: { user_id: userId }, order: [
        ['selected', 'DESC']
      ]
    }) : await Address.findAll()

    if (address.length == 0) return res.status(404).json({ message: "Data not found" })

    res.status(200).json({ message: "Success retrieve data", data: address });
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

    res.status(200).json({ message: 'Address deleted successfully', data: rowsDeleted });
  } catch (error) {
    res.status(500).json(error);
  }
};

const useAddress = async (req, res) => {
  try {
    const { id } = req.params
    const selectedAddress = await Address.findByPk(id)
    if (selectedAddress.length == 0) return res.status(404).json({ message: "Address not found" })

    const unselectAddressesFromSameUser = await Address.update({ selected: false }, { where: { user_id: selectedAddress.user_id } })

    const response = await selectedAddress.update({ selected: true })
    const updatedAddresses = await Address.findAll({
      where: { user_id: selectedAddress.user_id }, order: [
        ['selected', 'DESC']
      ]
    })
    res.status(200).json({ message: `Succes use ${response.name} addresss`, data: updatedAddresses })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  createAddress,
  getAddress,
  updateAddress,
  deleteAddress,
  useAddress
};
