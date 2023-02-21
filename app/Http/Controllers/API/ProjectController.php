<?php

namespace App\Http\Controllers\API;

use App\Models\Project;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function get_all_project() {
        $projects = Project::orderBy('id', 'DESC')->get();

        return response()->json([
            'projects' => $projects
        ],200);
    }
}
