<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Rompetomp\InertiaBundle\Architecture\InertiaInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HomeController
{
    #[Route('/', name: 'app_home')]
    public function __invoke(
        ProductRepository $products,
        InertiaInterface $inertia
    ): Response {
        return $inertia->render('Home', [
            'products' => array_map(
                static fn ($product): array => [
                    'id' => $product->getId(),
                    'name' => $product->getName(),
                    'description' => $product->getDescription(),
                    'price' => '$'.number_format((float) $product->getPrice(), 2),
                ],
                $products->findLatest()
            ),
        ], [
            'title' => 'Products',
        ]);
    }
}
