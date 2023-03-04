import Menu from '../models/Menu';

export const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find().populate('category');
    res.json(menus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMenu = async (req, res, next) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (menu == null) {
      return res.status(404).json({ message: 'Cannot find menu' });
    }
    res.menu = menu;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createMenu = async (req, res) => {
  try {
    const menu = new Menu({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      category: req.body.category,
    });
    const newMenu = await menu.save();
    res.status(201).json(newMenu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateMenu = async (req, res) => {
  try {
    await Menu.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    });
    res.status(200).json({ message: 'Menu updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteMenu = async (req, res) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Menu deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
