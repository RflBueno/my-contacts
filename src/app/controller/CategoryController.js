const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
    async index(req, res) {
        const categories = await CategoriesRepository.findAll();

        res.json(categories);
    }

    async show(req, res) {
        const { id } = req.params;
        const category = await CategoriesRepository.findById(id);

        if (!category) {
          return res.status(404).json({ error: 'Category not found' });
        }

        return res.json(category);
    }

    async store(req, res) {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const categoryExists = await CategoriesRepository.findByCategoryName(name);
        if (categoryExists) {
            return res.status(400).json({ error: 'Category already exists!' });
        }

        const category = await CategoriesRepository.create({ name });

        res.json(category);
    }

    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;

        const categoryExists = await CategoriesRepository.findById(id);

        if (!categoryExists) {
          return res.status(400).json({ error: 'Category not found' });
        }

        if (!name) {
          return res.status(400).json({ error: 'Category name is required!' });
        }

        const categoryByName = await CategoriesRepository.findByCategoryName(name);

        if (categoryByName && categoryByName.id !== id) {
          return res.status(400).json({ error: 'This name is already in use' });
        }

        const category = await CategoriesRepository.update(id, { name });

        return res.json(category);
      }

    async delete(req, res) {
        const { id } = req.params;

        await CategoriesRepository.delete(id);

        return res.sendStatus(204);
    }
}


module.exports = new CategoryController();
