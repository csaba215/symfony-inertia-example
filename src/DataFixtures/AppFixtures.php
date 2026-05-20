<?php

namespace App\DataFixtures;

use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $products = [
            ['Starter Kit', 'A compact setup for validating the Symfony Inertia flow.', '29.00'],
            ['Team License', 'A shared workspace for small product teams.', '149.00'],
            ['Operations Pack', 'Fixtures, migrations, and frontend wiring in one place.', '79.00'],
        ];

        foreach ($products as [$name, $description, $price]) {
            $product = (new Product())
                ->setName($name)
                ->setDescription($description)
                ->setPrice($price);

            $manager->persist($product);
        }

        $manager->flush();
    }
}
