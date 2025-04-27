// src/routes/pokemonRoutes.js
import express from 'express';
import Pokemon from '../models/Pokemon.js';
import { protect, adminOnly } from '../middlewares/authMiddleware.js';

const router = express.Router();

// 📥 Tous les pokémons
router.get('/', async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
});

// 📥 Un pokémon par ID
router.get('/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findOne({ id: req.params.id });
    if (!pokemon) {
      return res.status(404).json({ message: 'Pokémon non trouvé' });
    }
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
});

// ➕ Créer un pokémon
router.post('/', protect, async (req, res) => {
  try {
    const existing = await Pokemon.findOne({ id: req.body.id });
    if (existing) {
      return res.status(400).json({ message: 'Un Pokémon avec cet ID existe déjà' });
    }

    const newPokemon = new Pokemon(req.body);
    await newPokemon.save();
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création', error: error.message });
  }
});

// ✏️ Modifier un pokémon
router.put('/:id', protect, async (req, res) => {
  try {
    // On enlève "id" du body avant de faire la mise à jour
    const { id, ...updateData } = req.body;

    const updated = await Pokemon.findOneAndUpdate(
      { id: req.params.id },
      updateData,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Pokémon non trouvé' });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Erreur de mise à jour', error: error.message });
  }
});

// ❌ Supprimer un pokémon
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    const deleted = await Pokemon.findOneAndDelete({ id: req.params.id });

    if (!deleted) {
      return res.status(404).json({ message: 'Pokémon non trouvé' });
    }

    res.status(200).json({ message: 'Pokémon supprimé', deleted });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
});

export default router;
