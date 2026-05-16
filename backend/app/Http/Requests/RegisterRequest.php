<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, ValidationRule|array<mixed>|string>
   */
  public function rules(): array
  {
    return [
      'name' => ['required', 'string',],
      'email' => ['required', 'email', 'string',, 'unique:users,email'],
      'password' => ['required', 'string', 'min:8', 'confirmed', 'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/'],
    ];
  }
  public function messages(): array
  {
    return [
      'password.min' => 'Password must be at least 8 characters long.',
      'password.confirmed' => 'Password confirmation does not match.',
      'password.regex' => 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.',
    ];
  }
}
