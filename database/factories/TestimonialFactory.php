<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Testimonial>
 */
class TestimonialFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => 'John Smit',
            'function' => 'Customer',
            'testimony' => 'I get a good expressions...',
            'rating' => '4',
            'photo' => 'avatar.jpg'
        ];
    }
}