<?php

namespace App\Http\Controllers\API;

use App\Models\Testimonial;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function get_all_testimonial() {
        $testimonials = Testimonial::orderBy('id', 'DESC')->get();
        return response()->json([
            'testimonials' => $testimonials
        ],200);
    }
}
