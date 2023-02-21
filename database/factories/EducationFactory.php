<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Education>
 */
class EducationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'institution' => 'Krasnoyarsk Polytechnical institute',
            'period' => '1985-1992',
            'degree' => 'Engineer',
            'department' => 'Radiotechnical'
        ];
    }
}
