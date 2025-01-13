const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const authMiddleware = require("../middlewares/authMiddleware"); // Middleware pour authentification

// Ajouter un produit au panier
router.post("/add", authMiddleware, cartController.addToCart);

// Afficher le contenu du panier d'un utilisateur
router.get("/", authMiddleware, cartController.getCart);

// Mettre à jour la quantité d'un produit dans le panier
router.put("/update/:productId", authMiddleware, cartController.updateCartItem);

// Supprimer un produit du panier
router.delete("/remove/:productId", authMiddleware, cartController.removeCartItem);

// Vider le panier
router.delete("/clear", authMiddleware, cartController.clearCart);

module.exports = router;
