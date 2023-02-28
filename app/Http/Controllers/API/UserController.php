<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;

class UserController extends Controller
{
    public function get_all_user() {
        $users = User::all();
        return response()->json([
            'users' => $users
        ],200);
    }

    public function add_user(Request $request) {
        $this->validate($request, [
            'name' => 'required|min:2|max:50',
            'email' => 'required'
        ]);
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->type = $request->type;
        $user->bio = $request->bio;

        if ($request->photo) {
            $strpos = strpos($request->photo, ';');
            $sub = substr($request->photo,0,$strpos);
            $ex = explode('/', $sub)[1];
            $name = time() . '.' . $ex;
            $img = Image::make($request->photo)->resize(500,500);
            $upload_path = public_path() . '/img/upload/';
            $image = $upload_path.$user->photo;
            $img->save($upload_path.$name);
            if (file_exists($image)) {
                @unlink($image);
            }
        } else {
            $name = 'avatar.jpg';
        }
        $user->photo = $name;
        $user->save();
    }

    public function update_user(Request $request, $id) {
        $this->validate($request, [
            'name' => 'required|min:2|max:50',
            'email' => 'required'
        ]);
        $user = User::find($id);

        $user->name = $request->name;
        $user->email = $request->email;
        if ($request->password == 'undefined') {
            $user->password = $user->password;
        } else {
            $user->password = Hash::make($request->password);
        }
        $user->type = $request->type;
        $user->bio = $request->bio;

        if ($user->photo != $request->photo) {
            $strpos = strpos($request->photo, ';');
            $sub = substr($request->photo,0,$strpos);
            $ex = explode('/', $sub)[1];
            $name = time() . '.' . $ex;
            $img = Image::make($request->photo)->resize(500,500);
            $upload_path = public_path() . '/img/upload/';
            $image = $upload_path.$user->photo;
            $img->save($upload_path.$name);
            if (file_exists($image)) {
                @unlink($image);
            }
        } else {
            $name = $user->photo;
        }
        $user->photo = $name;
        $user->save();
    }

    public function delete_user(Request $request, $id) {
        $user = User::findOrFail($id);
        $image_path = public_path() . '/img/upload/';
        $image = $image_path . $user->photo;
        if (file_exists($image)) {
            @unlink($image);
        }
        $user->delete();
    }

    public function profile() {
        return Auth::user();
    }

    public function update_profile(Request $request, $id) {
        $user = User::find($id);

        $user->name = $request->name;
        $user->email = $request->email;
        if ($request->password == 'undefined') {
            $user->password = $user->password;
        } else {
            $user->password = Hash::make($request->password);
        }
        $user->type = $request->type;
        $user->bio = $request->bio;

        if ($user->photo != $request->photo) {
            $strpos = strpos($request->photo, ';');
            $sub = substr($request->photo,0,$strpos);
            $ex = explode('/', $sub)[1];
            $name = time() . '.' . $ex;
            $img = Image::make($request->photo)->resize(500,500);
            $upload_path = public_path() . '/img/upload/';
            $image = $upload_path.$user->photo;
            $img->save($upload_path.$name);
            if (file_exists($image)) {
                @unlink($image);
            }
        } else {
            $name = $user->photo;
        }
        $user->photo = $name;
        $user->save();
    }
}
