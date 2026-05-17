<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
  public function register(RegisterRequest $request)
  {
    $data = $request->validated();

    $user = User::create([
      'name' => $data['name'],
      'email' => $data['email'],
      'password' => Hash::make($data['password']),
    ]);

    /**
     * @var User
     */
    $token = $user->createToken('auth_token')->plainTextToken;

    return response(compact('user', 'token'), 201);
  }
  public function login(LoginRequest $request)
  {
    $credentials = $request->validated();

    if (!Auth::attempt($credentials)) {
      return response(['message' => 'Invalid credentials'], 401);
    }

    /**
     * @var User
     */

    $user = Auth::user();
    $token = $user->createToken('auth_token')->plainTextToken;

    return response(compact('user', 'token'), 200);
  }
  public function logout(Request $request)
  {

    /**
     * @var User
     */

    $request->user()->currentAccessToken()->delete();

    return response(['message' => 'Logged out successfully'], 200);
  }
}
