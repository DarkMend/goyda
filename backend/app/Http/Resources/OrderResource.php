<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'orderId' => $this->id,
            'userId' => $this->user_id,
            'amount' => $this->amount,
            'status' => $this->status,
            'products' => ProductResource::collection($this->whenLoaded('products'))
        ];
    }
}
