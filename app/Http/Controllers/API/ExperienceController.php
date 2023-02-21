<?php

namespace App\Http\Controllers\API;

use App\Models\Experience;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    public function get_all_experience() {
        $experiences = Experience::orderBy('id', 'DESC')->get();

        return response()->json([
            'experiences' => $experiences
        ],200);
    }
}
