const db = require("../models");
const CRUD = db.CRUD;

const post_crud = async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body;
    
        const new_crud = await CRUD.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
        });
    
        if (!new_crud) {
          return res.status(404).json({
            success: false,
            message: "Gagal menambahkan data",
            data: null,
          });
        }
    
        res.status(200).json({
          success: true,
          message: "Sukses menambah data",
          data: {
            firstName: new_crud.firstName,
            lastName: new_crud.lastName,
            email: new_crud.email,
          },
        });
      } catch (error) {
        console.log(error, "Data Error");
        res.status(500).json({
          success: false,
          message: "Internal server error",
          data: null,
        });
      }
}

const put_crud = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email } = req.body;

        const [updatedRows] = await CRUD.update({
            firstName: firstName,
            lastName: lastName,
            email: email,
        }, {
            where: { id: id }
        });

        if (updatedRows) {
            res.status(200).json({ message: "Data updated successfully" });
        } else {
            res.status(404).json({ message: "Data not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const delete_crud = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await CRUD.destroy({ where: { id: id } });
        if (deletedRows) {
            res.status(200).json({ message: "Data deleted successfully" });
        } else {
            res.status(404).json({ message: "Data not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const get_all_crud = async (req, res) => {
    try {
        const data = await CRUD.findAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const get_detail_crud = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await CRUD.findByPk(id);
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: "Data not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    post_crud,
    put_crud,
    delete_crud,
    get_all_crud,
    get_detail_crud
};